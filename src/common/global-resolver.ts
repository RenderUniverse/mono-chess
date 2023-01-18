import ModuleContainer from 'common/module-container';
import { ConversationController } from 'features/conversation';
import { PreviewController } from 'features/preview';

class GlobalResolver {
    static get ConversationController() {
        return ModuleContainer.resolve(ConversationController);
    }

    static get PreviewController() {
        return ModuleContainer.resolve(PreviewController);
    }
}

export default GlobalResolver;
