/**
 * Этот файл нужен только для серверных нужд (layout metadata, structured-data, SEO).
 * Основной источник данных, который видит пользователь — RESUME_DATA_I18N (resume-data-i18n.tsx).
 * Здесь дублируется русская версия для server-side metadata.
 */
import { RESUME_DATA_I18N } from "./resume-data-i18n";

export const RESUME_DATA = RESUME_DATA_I18N.ru;
