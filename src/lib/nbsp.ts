/** Espace insécable avant ? ! : ; (typographie française) : jamais un signe seul en début de ligne */
export const nbsp = (t: string) => t.replace(/ ([?!:;—])/g, ' $1');
