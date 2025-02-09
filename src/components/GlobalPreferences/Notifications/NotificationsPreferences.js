import React, { useCallback } from 'react'
import {
  Box,
  Button,
  GU,
  IconLock,
  IconMail,
  IconTrash,
  Info,
  RADIUS,
  Split,
  Switch,
  Tag,
  textStyle,
  useTheme,
} from '@1hive/1hive-ui'
import { useAsset } from '../../../hooks/useAsset'

import { EMAIL_NOTIFICATIONS } from '../../../utils/asset-utils'

export default function NotificationsPreferences({
  email,
  notificationsDisabled,
  onSwitchNotificationsStatus,
  onLockSettings,
  onDeleteEmail,
  onUpdateEmail,
}) {
  const theme = useTheme()

  return (
    <>
      <Split
        primary={
          <EmailNotificationBox
            notificationsDisabled={notificationsDisabled}
            onSwitchNotificationsStatus={onSwitchNotificationsStatus}
          />
        }
        secondary={
          <>
            <Box heading="Email account">
              <Tag
                uppercase={false}
                background={theme.infoSurface}
                size="normal"
                color={theme.content}
                css={`
                  ${textStyle('body2')};
                  border-radius: ${RADIUS}px;
                `}
              >
                {email}
              </Tag>
              <Button
                css={`
                  margin-top: ${2 * GU}px;
                `}
                wide
                mode="strong"
                onClick={onLockSettings}
              >
                <IconLock />
                <span
                  css={`
                    width: ${12 * GU}px;
                    margin-left: ${1.5 * GU}px;
                    text-align: left;
                  `}
                >
                  Lock settings
                </span>
              </Button>
              <Button
                css={`
                  margin-top: ${2 * GU}px;
                `}
                wide
                onClick={onUpdateEmail}
              >
                <IconMail />
                <span
                  css={`
                    width: ${12 * GU}px;
                    margin-left: ${1.5 * GU}px;
                    text-align: left;
                  `}
                >
                  Update email
                </span>
              </Button>
              <Button
                css={`
                  margin-top: ${2 * GU}px;
                `}
                wide
                onClick={onDeleteEmail}
              >
                <IconTrash
                  css={`
                    color: ${theme.negative};
                  `}
                />
                <span
                  css={`
                    width: ${12 * GU}px;
                    margin-left: ${1.5 * GU}px;
                    text-align: left;
                  `}
                >
                  Delete email
                </span>
              </Button>
            </Box>
          </>
        }
      />
    </>
  )
}

function EmailNotificationBox({
  notificationsDisabled,
  onSwitchNotificationsStatus,
}) {
  const emailNotificationsSvg = useAsset(EMAIL_NOTIFICATIONS)

  const handleSwitchNotificationsStatus = useCallback(() => {
    onSwitchNotificationsStatus(!notificationsDisabled)
  }, [notificationsDisabled, onSwitchNotificationsStatus])

  return (
    <Box heading="Email notifications">
      <div
        css={`
          display: flex;
          flex-direction: column;
          text-align: center;
        `}
      >
        <div>
          <img src={emailNotificationsSvg} width={180} height={180} alt="" />
        </div>
        <div
          css={`
            display: flex;
            margin-top: ${5 * GU}px;
            align-items: center;
          `}
        >
          <Switch
            checked={!notificationsDisabled}
            onChange={handleSwitchNotificationsStatus}
          />
          <span
            css={`
              ${textStyle('body1')};
              margin-left: ${1 * GU}px;
            `}
          >
            Receive email notifications for all Celeste events.
          </span>
        </div>
        <Info
          css={`
            margin-top: ${2 * GU}px;
            text-align: left;
          `}
          mode={notificationsDisabled ? 'warning' : 'info'}
        >
          {notificationsDisabled
            ? `We strongly advise you to enable these notifications. 
            By disabling these email alerts, you will not be notified when you are drafted to answer a dispute or 
            when your upcoming tasks are due. Failure to complete your duties as a keeper will result in monetary penalties.`
            : `We will notify you for any relevant Celeste events, such as when you are drafted to answer a
            dispute, when your upcoming tasks are due, and when you have rewards to claim.`}
        </Info>
      </div>
    </Box>
  )
}
