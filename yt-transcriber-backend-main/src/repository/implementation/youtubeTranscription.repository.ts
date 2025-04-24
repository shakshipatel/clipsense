import type { PrismaClient, YoutubeTranscription } from "@prisma/client";
import type { YoutubeTranscriptionExtend, YoutubeTranscriptionRepositoryContract } from "../contracts/youtubeTranscription.repository.contract";
import logger from "../../utils/logger";

class YoutubeTranscriptionRepository implements YoutubeTranscriptionRepositoryContract {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  createYoutubeTranscription = async ({ videoId, imageGenerationPrompt, detailedAnalysis, summary, finalThought, }: { videoId: string; imageGenerationPrompt: string; detailedAnalysis: string; summary: string; finalThought: string; }): Promise<YoutubeTranscription> => {
    try {
      const youtubeTranscription = await this.prismaClient.youtubeTranscription.create({
        data: {
          videoId,
          imageGenerationPrompt,
          detailedAnalysis,
          summary,
          finalThought,
        }
      })

      return youtubeTranscription;
    } catch (error: any) {
      logger.error("Error creating youtubetranscription : ", error)
      throw new Error(error);
    }
  }

  getYoutubeTranscription = async ({ videoId, }: { videoId: string; }): Promise<YoutubeTranscriptionExtend | null> => {
    try {
      const youtubeTranscription = await this.prismaClient.youtubeTranscription.findUnique({
        where: {
          videoId,
        },
        include: {
          Hashtags: true,
          Sentiment: true,
          Keywords: true,
        }
      })

      return youtubeTranscription;
    } catch (error: any) {
      logger.error("Error getting youtube transcription ", error);
      throw new Error(error)
    }
  }
}

export default YoutubeTranscriptionRepository