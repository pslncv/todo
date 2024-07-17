export const UseDate = () => {
    const d = new Date()
    const hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
    const minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
    const month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth()+1) : d.getMonth()+1
    const year = d.getFullYear()
    const week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    const weekday = week[d.getDay() - 1]
    const date = (hour + ":" + minute + ", " + weekday + ", " + day + "." + month + "." + year)
    return date
}