export const actionsDialog = {
    submitMessage: (id: number, message: string) => ({type: 'DIALOG/SUBMIT_MESSAGE', id, message} as const),
    deleteMessage: (userId: number, messageId: string) => ({type: 'DIALOG/DELETE_MESSAGE', userId, messageId} as const),
}
