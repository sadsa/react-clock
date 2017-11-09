export default class ClockService {

  static calcAngleForSeconds(date) {
    const seconds = date.getSeconds();
    return (seconds * 6);
  }
  
  static calcAngleForMinutes(date) {
    const minutes = date.getMinutes();
    return (minutes * 6);
  }
  
  static calcAngleForHours(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours * 30) + (minutes / 2);
  } 
}