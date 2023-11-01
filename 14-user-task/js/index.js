/**
 *  создать три файла
 *  - user.js - содержит класс User, который в конструктор принимает 
 *      Task и метод do(), который вызывает у Task метод run()
 * 
 *  - task.js - содержит класс Task с методом run(), который выводит
 *      в консоль заданный в конструкторе сообщение
 * 
 *  - index.js - создает Task, а затем User с этим Task и вызывает 
 *      у User метод do()
 */

import { Task } from './task.js';
import { User } from './user.js';

const user = new User(new Task('Привет из модуля'));
user.do();