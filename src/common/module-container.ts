import * as DI from 'tsyringe';
import constructor from 'tsyringe/dist/typings/types/constructor';

export class _ModuleContainer {
    injectable = DI.injectable;
    inject = <T>(token: DI.InjectionToken<T>) => DI.inject(token);
    singleton = DI.singleton;
    resolve = <T>(token: DI.InjectionToken<T>) => DI.container.resolve(token);
    autoRegister = <T>(moduleName: string) => {
        return function (target: constructor<T>) {
            DI.container.register(moduleName, { useClass: target });
        };
    };
}

const ModuleContainer = new _ModuleContainer();
export default ModuleContainer;
