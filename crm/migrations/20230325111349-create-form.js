/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Forms', {
            id: {
                primaryKey: true,
                allowNull: false,
                defaultValue: Sequelize.literal('gen_random_uuid()'),
                type: Sequelize.UUID,
            },
            clientName: {
                type: Sequelize.STRING,
            },
            clientEmail: {
                type: Sequelize.STRING,
            },
            courseInterest: {
                type: Sequelize.STRING,
            },
            isClaimed: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            claimedBy: {
                type: Sequelize.UUID,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Forms');
    },
};
