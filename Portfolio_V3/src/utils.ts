export const formatDate = (dateSTR: string): string => {
    const date = new Date(dateSTR);
    if (isNaN(date.getTime())) {
        throw new Error("Not a valid date.");
    }
    return date.toISOString().split("T")[0];
}