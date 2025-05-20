export function formatDate(date: string | undefined): string | undefined {
    
    if (!date) return;

    const dateFormat = new Date(date);
    const day = padZero(dateFormat.getDate() + 1);
    const month = padZero(dateFormat.getMonth() + 1);
    const year = dateFormat.getFullYear();

    return `${year}-${month}-${day}`;
}

function padZero(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
}