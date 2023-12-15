const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()
const UserModel = prisma.User
const EmailAccounts = prisma.EmailAccounts
const EmailMessages = prisma.EmailMessages


module.exports = {
    UserModel,
    EmailAccounts,
    EmailMessages
}