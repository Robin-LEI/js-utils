import moment from "moment"
/**
 * 根据传入的时间戳返回 x小时x分x秒
 * @param {*} timestamp 
 * @returns 
 */
export const statisticalTime = function (timestamp) {
  if (timestamp == null) return null
  const duration = moment.duration(timestamp)
  const hours = Math.floor(duration.asHours())
  const minutes = Math.floor(duration.asMinutes()) - hours*60
  const seconds = Math.floor(duration.asSeconds()) - minutes*60 - hours*60*60
  return `${hours}小时${minutes}分${seconds}秒`
}
