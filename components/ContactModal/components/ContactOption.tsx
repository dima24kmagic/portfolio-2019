import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import {
  Button,
  GradientTypography,
  TypographyWeight,
} from "../../StyledComponents";
import { theme } from "../../../theme/theme";
import { AnimatePresence, motion } from "framer-motion";

export interface IContactOptionProps {
  label: string;
  href: string;
  options: any;
  gradient?: string;
  copyLabel: string;
  copyValue: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 18px;
  overflow: hidden;

  ${theme.breakpoints.md} {
    align-items: center;
  }
`;

const CopiedOverlayAnimation = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
`;

const CopiedTextAnimated = styled(motion.p)`
  color: white;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ValueToCopy = styled.textarea`
  width: 1px;
  height: 1px;
  clip: rect(0, 0);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

/**
 * Contact option
 */
const ContactOption = ({
  label,
  href,
  options,
  gradient,
  copyLabel,
  copyValue,
}: IContactOptionProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const handleCopy = () => {
    setIsCopied(true);
    textAreaRef?.current?.select();
    document.execCommand("copy");
    textAreaRef?.current?.blur();
  };
  return (
    <Root>
      <ValueToCopy
        defaultValue={copyValue}
        tabIndex={-1}
        aria-hidden="true"
        // @ts-ignore
        ref={textAreaRef}
      />
      <a href={href} {...options}>
        <GradientTypography
          customStyles={css`
            background: ${gradient};
          `}
          weight={TypographyWeight.Black}
          tag="span"
          textAlign="center"
          width="fit-content"
          mB="4px"
          fontSize="42px"
        >
          {label}
        </GradientTypography>
      </a>
      <Button
        onClick={handleCopy}
        pure
        customStyle={css`
          position: relative;
          overflow: hidden;
          border-radius: 0px;
          height: 24px;
          &:focus {
            outline: none;
          }
        `}
      >
        <AnimatePresence>
          {isCopied && (
            <>
              <CopiedOverlayAnimation
                initial={{ x: "-100%" }}
                animate={{ x: 0, transition: { duration: 0.5 } }}
                exit={{ x: "100%", transition: { delay: 0.85, duration: 0.5 } }}
                onAnimationComplete={() => {
                  setIsCopied(false);
                }}
              />
              <CopiedTextAnimated
                initial={{ top: "-20%", opacity: 0 }}
                animate={{
                  top: "50%",
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0 },
                }}
                exit={{
                  top: "100%",
                  opacity: 0,
                  transition: { delay: 0.75, duration: 0.5 },
                }}
              >
                Copied!
              </CopiedTextAnimated>
            </>
          )}
        </AnimatePresence>
        <GradientTypography
          customStyles={css`
            background: ${gradient};
          `}
          weight={TypographyWeight.Thin}
          tag="p"
          textAlign="center"
          width="fit-content"
          fontSize="14px"
        >
          {copyLabel}
        </GradientTypography>
      </Button>
    </Root>
  );
};

export default ContactOption;
