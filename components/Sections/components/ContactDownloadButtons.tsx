import React from "react";
import styled, { css } from "styled-components";
import {
  Button,
  Typography,
  TypographyColors,
  TypographyWeight,
} from "../../StyledComponents";
import { theme } from "../../../theme/theme";

export interface IInitiativeButtonsProps {
  onContactMeClick: () => void;
  isModalOpen: boolean;
}

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;

  ${theme.breakpoints.md} {
    width: 80%;
    flex-direction: column;
  }
`;

const NextLink = styled.div`
  ${theme.breakpoints.md} {
    width: 100%;
    background: #0b0b0b;
    border-radius: 8px;
  }
`;

/**
 * Buttons to initiate action
 */
function ContactDownloadButtons(props: IInitiativeButtonsProps) {
  const { onContactMeClick, isModalOpen } = props;
  const handleDownload = () => {
    // Get the URL of the PDF file
    const pdfUrl = "/files/PDF Portfolio.pdf";

    // Create a temporary anchor element
    const anchor = document.createElement("a");

    // Set the href and download attributes for the anchor element
    anchor.href = pdfUrl;
    anchor.download = "Frontend Portfolio - Dzmitry Baranau.pdf";

    // Append the anchor element to the document
    document.body.appendChild(anchor);

    // Check if the browser supports the download attribute
    if (anchor.download !== undefined) {
      // Click the anchor element to trigger the download
      anchor.click();
    } else {
      // Fallback mechanism: open the PDF file in a new window
      window.open(pdfUrl);
    }

    // Remove the anchor element from the document
    document.body.removeChild(anchor);
  };

  return (
    <ButtonsWrapper>
      <NextLink
        onClick={handleDownload}
      >
        <Button
          tabIndex={-1}
          width="218px"
          customStyle={css`
            ${theme.breakpoints.md} {
              width: 100%;
              background: #0b0b0b;
            }
          `}
        >
          <Typography
            customStyles={css`
              z-index: 10;
            `}
            fontSize="20px"
          >
            Download CV
          </Typography>
        </Button>
      </NextLink>
      <Typography
        customStyles={css`
          z-index: 10;
          ${theme.breakpoints.md} {
            margin-bottom: 8px;
            margin-top: 8px;
          }
        `}
        weight={TypographyWeight.Light}
        color={TypographyColors.Secondary}
        fontSize="16px"
        letterSpacing={2}
      >
        or
      </Typography>
      <Button
        aria-haspopup="true"
        aria-expanded={isModalOpen}
        width="218px"
        background="#4B65EB"
        bgHover="#5670f3"
        onClick={onContactMeClick}
        customStyle={css`
          ${theme.breakpoints.md} {
            width: 100%;
          }
        `}
      >
        <Typography
          customStyles={css`
            z-index: 10;
          `}
          weight={TypographyWeight.SemiBold}
          fontSize="24px"
        >
          Contact Me
        </Typography>
      </Button>
    </ButtonsWrapper>
  );
}

export default ContactDownloadButtons;
