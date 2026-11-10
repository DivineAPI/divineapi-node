import { BaseClient } from '../client.js';
import type { ChatbotBalanceResponse, ChatbotChatParams, ChatbotChatResponse, ChatbotDeleteSessionResponse, ChatbotHoroscopeParams, ChatbotHoroscopeResponse, ChatbotSessionParams, ChatbotSessionResponse, ChatbotSessionsParams, ChatbotSessionsResponse, ChatbotStreamEvent } from '../types.js';
/**
 * Astro Chatbot endpoints (ask.divineapi.com): astrology answers grounded in a birth chart.
 *
 * Conversations are scoped per end user. One API key (you) has many `user_id`s (your end
 * users), and each `user_id` has many `session_id`s (separate conversations), each with
 * its own birth details. The same `session_id` under two `user_id`s is two sessions.
 *
 * Needs an Astro Chatbot plan on the account. The SDK sends your API key and auth token
 * as the `x-api-key` and `Authorization: Bearer` headers.
 */
export declare class ChatbotApi {
    private readonly client;
    constructor(client: BaseClient);
    /**
     * Send one message in a conversation and get the answer.
     *
     * The first message of a session must carry the birth details (`day`, `month`, `year`,
     * `hour`, `min`, `gender`, `place`, `lat`, `lon`, `tzone`; `full_name` and `sec` are
     * optional). Later messages in the same session reuse them until a new complete set is
     * sent. Returns `request_id`, `answer`, `band`, `credits_charged` and
     * `credits_remaining`; a message the guardrails block gets a free reply with
     * `blocked: true` and a `block_reason`.
     *
     * Use {@link chatStream} to stream the answer.
     */
    chat(params: ChatbotChatParams): Promise<ChatbotChatResponse>;
    /**
     * Same as {@link chat}, but streams the answer while it is written.
     *
     * Yields `{ delta }` events, then one last event with `done: true` and the fields
     * {@link chat} returns. That event's `answer` is the final cleaned-up text, which can
     * differ slightly from the joined deltas. Throws a `DivineApiError` with status 502 if
     * the answer fails part-way; nothing is charged then.
     *
     * @example
     * ```typescript
     * for await (const event of client.chatbot.chatStream({ user_id: 'u_1', session_id: 's_1', message: 'Will I travel?' })) {
     *   if (event.delta) process.stdout.write(event.delta);
     *   if (event.done) console.log('\ncredits left:', event.credits_remaining);
     * }
     * ```
     */
    chatStream(params: ChatbotChatParams): AsyncGenerator<ChatbotStreamEvent, void, undefined>;
    /**
     * Short personal horoscope for one date (`YYYY-MM-DD`, 1900-01-01 to 2100-12-30), from
     * the birth chart and that day's sky. Every call needs the complete birth details.
     * Returns `request_id`, `date`, `prediction`, `moon_phase_today`, `credits_charged` and
     * `credits_remaining`. Each prediction is also saved in the user's
     * `"horoscope-prediction"` session, which {@link sessions} and {@link session} show.
     */
    horoscopePrediction(params: ChatbotHoroscopeParams): Promise<ChatbotHoroscopeResponse>;
    /**
     * Every conversation this end user has under your key, most recent first. Throws a
     * `DivineApiError` with status 404 if the user_id has no sessions yet.
     */
    sessions(params: ChatbotSessionsParams): Promise<ChatbotSessionsResponse>;
    /**
     * One conversation's full history (messages oldest first, plus the stored birth
     * details), for restoring a chat screen. Throws a `DivineApiError` with status 404 if
     * the user_id or this user's session_id is unknown.
     */
    session(params: ChatbotSessionParams): Promise<ChatbotSessionResponse>;
    /**
     * Permanently delete one conversation: its messages and stored birth details. Use it
     * when your end user asks to be forgotten. Throws a `DivineApiError` with status 404 if
     * the user_id or this user's session_id is unknown.
     */
    deleteSession(params: ChatbotSessionParams): Promise<ChatbotDeleteSessionResponse>;
    /**
     * Astro Chatbot credit balance for your key. Free. Throws a `DivineApiError` with
     * status 404 if the account has no Astro Chatbot plan.
     */
    balance(): Promise<ChatbotBalanceResponse>;
}
//# sourceMappingURL=index.d.ts.map