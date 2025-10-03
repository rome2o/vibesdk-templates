import React from 'react';
import { 
  Page, 
  Layout, 
  Card, 
  Button, 
  Text, 
  Banner,
  BlockStack,
  InlineStack,
  Icon,
  Collapsible
} from '@shopify/polaris'
import { AlertTriangleIcon, RefreshIcon, HomeIcon } from '@shopify/polaris-icons'

export interface ErrorFallbackProps {
  title?: string;
  message?: string;
  error?: Error | any;
  onRetry?: () => void;
  onGoHome?: () => void;
  showErrorDetails?: boolean;
  statusMessage?: string;
}

export function ErrorFallback({
  title = "Oops! Something went wrong",
  message = "We're aware of the issue and actively working to fix it. Your experience matters to us.",
  error,
  onRetry,
  onGoHome,
  showErrorDetails = true,
  statusMessage = "Our team has been notified"
}: ErrorFallbackProps) {
  const [showDetails, setShowDetails] = React.useState(false);

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <Page title={title}>
      <Layout>
        <Layout.Section>
          <Card>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <BlockStack gap="loose" align="center">
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon source={AlertTriangleIcon} tone="base" />
                </div>

                <Text variant="headingLg" as="h1">
                  {title}
                </Text>

                <Text variant="bodyLg" tone="subdued">
                  {message}
                </Text>

                {statusMessage && (
                  <Banner status="info" title={statusMessage} />
                )}

                <BlockStack gap="tight">
                  <Button 
                    onClick={handleRetry} 
                    variant="primary"
                    icon={RefreshIcon}
                  >
                    Try Again
                  </Button>
                  <Button 
                    onClick={handleGoHome} 
                    variant="secondary"
                    icon={HomeIcon}
                  >
                    Go to Homepage
                  </Button>
                  </BlockStack>

                {process.env.NODE_ENV === 'development' && showErrorDetails && error && (
                  <div style={{ width: '100%', maxWidth: '600px' }}>
                    <Button 
                      variant="tertiary" 
                      onClick={() => setShowDetails(!showDetails)}
                    >
                      {showDetails ? 'Hide' : 'Show'} Error details (Development only)
                    </Button>
                    
                    <Collapsible
                      open={showDetails}
                      id="error-details"
                      transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                    >
                      <div style={{ 
                        marginTop: '1rem', 
                        padding: '1rem', 
                        backgroundColor: '#f6f6f7',
                        borderRadius: '8px',
                        fontFamily: 'monospace',
                        fontSize: '12px',
                        overflow: 'auto',
                        maxHeight: '200px'
                      }}>
                        <pre>
                          {error.message || error.toString()}
                          {error.stack && '\n\n' + error.stack}
                        </pre>
                      </div>
                    </Collapsible>
                  </div>
                )}
                  </BlockStack>
            </div>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <Text variant="bodyMd" tone="subdued">
              If this problem persists, please contact our support team
            </Text>
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  );
}