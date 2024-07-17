export const UseDate = () => {
    const date = new Date();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1;
    const year = date.getFullYear();
    const dateNow = (hour + ":" + minute + ", " + day + "." + month + "." + year);
    return dateNow
}