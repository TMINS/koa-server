export const fn_util__date_format = (value = new Date()) => {
  let date = new Date(value);
  date === "Invalid Date" && (date = new Date());
  if (date !== "Invalid Date") {
    let yy = date.getFullYear(), // year
      MM = date.getMonth() + 1, // month
      dd = date.getDate(), // day
      hh = date.getHours(), // hour
      mm = date.getMinutes(), // minute
      ss = date.getSeconds(), // second
      timestamp = date.getTime(), // 时间搓
      linuxtime = Number((timestamp / 1000 + "").split(".")[0]),
      day = date.getDay(); // 周几
    MM = MM > 9 ? MM : "0" + MM;
    dd = dd > 9 ? dd : "0" + dd;
    hh = hh > 9 ? hh : "0" + hh;
    mm = mm > 9 ? mm : "0" + mm;
    ss = ss > 9 ? ss : "0" + ss;
    day = +day === 0 ? 7 : day;
    let dayToUpperCase = ["一", "二", "三", "四", "五", "六", "日"];
    return {
      yy,
      MM,
      dd,
      hh,
      mm,
      ss,
      timestamp,
      linuxtime,
      day,
      dayToUpperCase: dayToUpperCase[day - 1],
    };
  }
};
