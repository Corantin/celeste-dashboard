import React from 'react'
import { Button, GU, textStyle, useTheme } from '@1hive/1hive-ui'
import { getNetworkName } from '../../lib/web3-utils'

function DisputeNotFoundError({ disputeId }) {
  const theme = useTheme()

  return (
    <React.Fragment>
      <h1
        css={`
          color: ${theme.surfaceContent};
          ${textStyle('title2')};
          margin-bottom: ${1.5 * GU}px;
          text-align: center;
        `}
      >
        Dispute not found
      </h1>
      <div
        css={`
          margin-bottom: ${3 * GU}px;
          text-align: center;
          color: ${theme.surfaceContentSecondary};
          ${textStyle('body2')};
        `}
      >
        It looks like there’s no dispute associated with{' '}
        {`“DisputeID #${disputeId}”`} on the Ethereum {getNetworkName()} network
      </div>
      <div
        css={`
          display: flex;
          justify-content: space-around;
        `}
      >
        <Button
          mode="strong"
          label="Go back to dashboard"
          onClick={() => (window.location.href = '/disputes')}
        />
      </div>
    </React.Fragment>
  )
}

export default DisputeNotFoundError
