import { describe, expect, it } from 'vitest';
import { motionConfig, motionTokens, springs } from '../lib/motion-tokens';

describe('motion-tokens', () => {
  it('expose duration and easing tokens', () => {
    expect(motionTokens.duration.normal).toBeGreaterThan(0);
    expect(motionTokens.easing.smooth).toHaveLength(4);
  });

  it('expose spring presets', () => {
    expect(springs.snappy.stiffness).toBe(300);
  });

  it('expose motion gates as functions', () => {
    expect(typeof motionConfig.prefersReduced).toBe('function');
    expect(typeof motionConfig.shouldAnimate).toBe('function');
  });
});
