import { NextRequest } from "next/server";
import { getQuestionListRequestDTO } from "../dto/question_list.get";

export class VocabularyController {
  constructor() {}
  async getQuestionList(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const query = {
      level: searchParams.get("level"),
      category: searchParams.get("category"),
    };

    const result = getQuestionListRequestDTO.safeParse(query);

    return result;
  }
}
