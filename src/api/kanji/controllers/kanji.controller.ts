import { NextRequest } from "next/server";
import { getQuestionListRequestDTO } from "../dto/question_list.get";
import { getCategoryListRequestDTO } from "../dto/category_list.get";

export class KanjiController {
  constructor() {}
  async getCategoryList(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const query = {
      level: searchParams.get("level"),
    };

    const result = getCategoryListRequestDTO.safeParse(query);

    return result;
  }
  async getQuestionList(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const query = {
      level: searchParams.get("level"),
      stroke: searchParams.get("stroke"),
    };

    const result = getQuestionListRequestDTO.safeParse(query);

    return result;
  }
}
