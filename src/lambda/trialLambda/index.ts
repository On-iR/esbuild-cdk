import dayjs from 'dayjs';

export async function handler(event: unknown): Promise<void> {
  console.log(event);
  console.log(dayjs());
}
