import type { Particle } from "../hooks/useParticles";

type Props = {
    particles: Particle[];
};

export function ParticlesOverlay({ particles }: Props) {
    return (
        <div className="particles" aria-hidden="true">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        width: `${particle.sizePx}px`,
                        height: `${particle.sizePx}px`,
                        left: `${particle.leftPct}%`,
                        top: `${particle.topPct}%`,
                        animationDelay: `${particle.animationDelayS}s`,
                        animationDuration: `${particle.animationDurationS}s`,
                    }}
                />
            ))}
        </div>
    );
}
