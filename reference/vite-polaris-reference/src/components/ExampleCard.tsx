import React from 'react';
import { 
  Card, 
  Text, 
  Button, 
  BlockStack, 
  InlineStack,
  Badge,
  Icon
} from '@shopify/polaris';
import { StarFilledIcon, PlusIcon } from '@shopify/polaris-icons';

interface ExampleCardProps {
  title: string;
  description: string;
  badgeText?: string;
  onAction?: () => void;
}

export function ExampleCard({ title, description, badgeText, onAction }: ExampleCardProps) {
  return (
    <Card>
      <div style={{ padding: '1rem' }}>
        <BlockStack gap="tight">
          <InlineStack gap="tight" align="center">
            <Text variant="headingMd" as="h3">
              {title}
            </Text>
            {badgeText && (
              <Badge tone="success">
                {badgeText}
              </Badge>
            )}
          </InlineStack>
          
          <Text variant="bodyMd" tone="subdued">
            {description}
          </Text>
          
          {onAction && (
            <Button 
              variant="primary" 
              size="slim"
              onClick={onAction}
              icon={PlusIcon}
            >
              Action
            </Button>
          )}
        </BlockStack>
      </div>
    </Card>
  );
}