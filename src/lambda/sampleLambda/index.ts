import { BODY_A, BODY_B } from '#/sampleBody';

export async function handler(event: unknown): Promise<void> {
  console.log(event);
  console.log(BODY_A);
  console.log(BODY_B);
}
