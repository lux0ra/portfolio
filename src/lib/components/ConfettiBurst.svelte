<script lang="ts">
    import { onMount } from 'svelte';

    type Particle = {
        x: number;
        y: number;
        vx: number;
        vy: number;
        rotation: number;
        spin: number;
        size: number;
        color: string;
        age: number;
        lifetime: number;
    };

    let canvas = $state<HTMLCanvasElement | undefined>();
    let active = $state(false);
    const colors = ['#A12EF4', '#FF5E61', '#FF9509', '#EC234B'];
    let particles: Particle[] = [];
    let mounted = false;
    let frame = 0;
    let lastFrame = 0;
    let lastBurst = -Infinity;
    let width = 0;
    let height = 0;

    function draw(now: number) {
        const context = canvas?.getContext('2d');
        if (!context) {
            particles = [];
            active = false;
            frame = 0;
            return;
        }

        const dt = Math.min((now - lastFrame) / 1000, 0.04);
        lastFrame = now;
        context.clearRect(0, 0, width, height);
        particles = particles.filter((particle) => particle.age < particle.lifetime);

        for (const particle of particles) {
            particle.age += dt;
            particle.vy += 700 * dt;
            particle.x += particle.vx * dt;
            particle.y += particle.vy * dt;
            particle.rotation += particle.spin * dt;
            context.save();
            context.globalAlpha = Math.max(0, 1 - particle.age / particle.lifetime);
            context.translate(particle.x, particle.y);
            context.rotate(particle.rotation);
            context.fillStyle = particle.color;
            context.fillRect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2);
            context.restore();
        }

        if (particles.length) {
            frame = requestAnimationFrame(draw);
        } else {
            context.clearRect(0, 0, width, height);
            active = false;
            frame = 0;
        }
    }

    export function burst(x: number, y: number) {
        if (!mounted || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const element = canvas;
        const context = element?.getContext('2d');
        const now = performance.now();
        if (!element || !context || now - lastBurst < 150) return;
        lastBurst = now;

        width = window.innerWidth;
        height = window.innerHeight;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        element.width = Math.round(width * ratio);
        element.height = Math.round(height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);

        particles = particles.slice(-48);
        for (let index = 0; index < 48; index++) {
            particles.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 420,
                vy: -160 - Math.random() * 260,
                rotation: Math.random() * Math.PI,
                spin: (Math.random() - 0.5) * 14,
                size: 5 + Math.random() * 5,
                color: colors[index % colors.length]!,
                age: 0,
                lifetime: 1.1 + Math.random() * 0.6,
            });
        }

        active = true;
        if (!frame) {
            lastFrame = now;
            frame = requestAnimationFrame(draw);
        }
    }

    onMount(() => {
        mounted = true;
        return () => {
            mounted = false;
            cancelAnimationFrame(frame);
            frame = 0;
            particles = [];
        };
    });
</script>

<canvas
    hidden={!active}
    bind:this={canvas}
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 z-50 h-full w-full"
></canvas>
