import { Conversation } from 'features/preview';

export class ConversationController {
    private convCached: Map<string, Conversation>;
    constructor() {
        this.convCached = new Map();
    }

    getConversation(convId: string) {
        return this.convCached.get(convId);
    }
}
