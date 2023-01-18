import GlobalResolver from 'common/global-resolver';
import { Conversation } from 'features/preview';

export class PreviewController {
    private currentConv?: Conversation;

    getCurrentConversation() {
        return this.currentConv;
    }

    openConversation(convId: string) {
        this.currentConv = GlobalResolver.ConversationController.getConversation(convId);
    }
}
