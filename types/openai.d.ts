// types/openai.d.ts

export type WhisperResponse = {
  text: string;
};

export type GPTMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type GPTResponse = {
  id: string;
  object: "chat.completion";
  created: number;
  model: string;
  choices: {
    index: number;
    message: GPTMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};
