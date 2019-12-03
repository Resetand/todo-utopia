export const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export const upperFirst = (text: string) => text[0].toUpperCase() + text.slice(1);
