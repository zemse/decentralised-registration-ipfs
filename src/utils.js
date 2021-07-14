export function renderSecondsRemaining(numberOfSeconds) {
    const days = Math.floor(numberOfSeconds / 60 / 60 / 24);
    const hours = Math.floor((numberOfSeconds - days * 60 * 60 * 24) / 60 / 60);
    const minutes = Math.floor((numberOfSeconds - days * 60 * 60 * 24 - hours * 60 * 60) / 60);
    const seconds = numberOfSeconds - days * 60 * 60 * 24 - hours * 60 * 60 - minutes * 60;

    return `${days !== 0 ? `${days} days, ` : ''}${hours !== 0 ? `${hours} hours, ` : ''}${
        minutes !== 0 ? `${minutes} minutes and ` : ''
}${seconds} seconds`;
}