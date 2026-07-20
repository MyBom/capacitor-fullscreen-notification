import { WebPlugin } from '@capacitor/core';
import type { PluginListenerHandle } from '@capacitor/core';
import type { MessageListener, FullScreenNotificationPlugin } from './definitions';
export declare class FullScreenNotificationWeb extends WebPlugin implements FullScreenNotificationPlugin {
    cancelNotification(): Promise<void>;
    canUseFullScreenIntent(): Promise<{
        result: boolean;
    }>;
    openFullScreenIntentSettings(): Promise<{
        result: boolean;
    }>;
    addListener(eventName: 'launch', listenerFunc: MessageListener): Promise<PluginListenerHandle>;
}
