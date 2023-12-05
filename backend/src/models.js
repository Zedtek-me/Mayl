const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()
const UserModel = prisma.User


module.exports = {
    UserModel
}