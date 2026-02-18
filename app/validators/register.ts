import vine from '@vinejs/vine'

export const RegisterValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(3).maxLength(80),
    email: vine.string().trim().email().unique({ table: 'users', column: 'email' }),
    password: vine.string().trim().minLength(6).maxLength(180).confirmed(),
    phoneNumber: vine.string().trim().minLength(10).maxLength(20),
  })
)
