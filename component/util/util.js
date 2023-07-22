export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const jsonHeader = { "Content-Type": "Application" };
