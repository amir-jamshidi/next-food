import { z } from 'zod'

export const phoneSchema = z.object({
    phone: z.string('شماره تلفن رو وارد کن').min(11, 'شماره همراه باید 11 رقم باشه').max(11, 'شماره همراه باید 11 رقم باشه').regex(new RegExp(/^09[\d]{9}$/), 'فرمت شماره همراه درست نیست')
})
export const codeSchema = z.object({
    code: z.string("کد فعالسازی رو وارد کن").min(5, 'کد فعالسازی باید 5 رقم باشه').max(5, 'کد فعالسازی باید 5 رقم باشه').regex(new RegExp(/^[\d]{5}$/), 'فرمت کد فعالسازی درست نیست')
})