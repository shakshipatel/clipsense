"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { setUser } from "@/lib/features/user/userSlice";
import { useAppDispatch } from "@/lib/hooks";

import { errorToast } from "@/utils/toast";
import { axios_instance } from "@/utils/axios_instance";
import OutlineButton from "@/ui/Buttons/OutlineButton/OutlineButton";

import YoutubeGoogleImg from "@/images/yt-sound-image.png";

import styles from "./Code.module.scss";

type Props = {
  provider: string;
};

const Code = (props: Props) => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const verifyOAuthToken = async (
    INTEGERATION_TYPE: string,
    payload: { code: string },
    callback: any
  ) => {
    try {
      const response = await axios_instance.post(
        `/oauth/${INTEGERATION_TYPE}/verify`,
        payload
      );
      // handle failure
      if (![200, 201].includes(response?.status || response?.data?.status)) {
        errorToast(
          response?.data?.message ||
            "Failed to verify oauth token. Please try again."
        );
      }

      // check for callback
      if (callback && typeof callback === "function") {
        callback(response?.data, null);
      }
    } catch (error) {
      callback(null, error);
    } finally {
      console.log(
        "Verify oauth token request completed. This message is displayed regardless of success or failure."
      );
    }
  };

  useEffect(() => {
    verifyOAuthToken(
      props.provider,
      {
        code: code,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      },
      (res: any, err: any) => {
        if (err) {
          errorToast(err?.message);
          return;
        }
        dispatch(setUser(res?.data));
        window.location.href = "/";
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <Image
          src={YoutubeGoogleImg}
          quality={100}
          priority={true}
          alt=""
          width={138}
        />
        <h1>🚀 Taking you to your details...</h1>
        <OutlineButton
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <p>Go to home</p>
        </OutlineButton>
      </div>
    </div>
  );
};

export default Code;
