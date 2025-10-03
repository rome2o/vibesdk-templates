// Home page of the app, Currently a demo page for demonstration.
// Please rewrite this file to implement your own logic. Do not replace or delete it, simply rewrite this HomePage.tsx file.
import { useEffect, useState } from 'react'
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
  Badge,
  Divider
} from '@shopify/polaris'
import { StarFilledIcon, ClockIcon, PlusIcon, RefreshIcon } from '@shopify/polaris-icons'
import { ExampleCard } from '@/components/ExampleCard'
import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

// Timer store: independent slice with a clear, minimal API, for demonstration
type TimerState = {
  isRunning: boolean;
  elapsedMs: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
  tick: (deltaMs: number) => void;
}

const useTimerStore = create<TimerState>((set) => ({
  isRunning: false,
  elapsedMs: 0,
  start: () => set({ isRunning: true }),
  pause: () => set({ isRunning: false }),
  reset: () => set({ elapsedMs: 0, isRunning: false }),
  tick: (deltaMs) => set((s) => ({ elapsedMs: s.elapsedMs + deltaMs })),
}))

// Counter store: separate slice to showcase multiple stores without coupling
type CounterState = {
  count: number;
  inc: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
  reset: () => set({ count: 0 }),
}))

function formatDuration(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000))
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function HomePage() {
  const [showBanner, setShowBanner] = useState(false)
  
  // Select only what is needed to avoid unnecessary re-renders
  const { isRunning, elapsedMs } = useTimerStore(
    useShallow((s) => ({ isRunning: s.isRunning, elapsedMs: s.elapsedMs })),
  )
  const start = useTimerStore((s) => s.start)
  const pause = useTimerStore((s) => s.pause)
  const resetTimer = useTimerStore((s) => s.reset)
  const count = useCounterStore((s) => s.count)
  const inc = useCounterStore((s) => s.inc)
  const resetCount = useCounterStore((s) => s.reset)

  // Drive the timer only while running; avoid update-depth issues with a scoped RAF
  useEffect(() => {
    if (!isRunning) return
    let raf = 0
    let last = performance.now()
    const loop = () => {
      const now = performance.now()
      const delta = now - last
      last = now
      // Read store API directly to keep effect deps minimal and stable
      useTimerStore.getState().tick(delta)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [isRunning])

  const onPleaseWait = () => {
    inc()
    setShowBanner(true)
    if (!isRunning) {
      start()
    } else {
      pause()
    }
  }

  const formatted = formatDuration(elapsedMs)

  return (
    <Page title="Creating your app" subtitle="Your application would be ready soon">
      <Layout>
        <Layout.Section>
          {showBanner && (
            <Banner
              title={isRunning ? "Building your app…" : "Taking a short pause"}
              status={isRunning ? "success" : "info"}
              onDismiss={() => setShowBanner(false)}
            >
              <p>{isRunning ? "Hang tight, we're setting everything up." : "We'll continue shortly."}</p>
            </Banner>
          )}
        </Layout.Section>

        <Layout.Section>
          <Card>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <BlockStack gap="loose" align="center">
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px -5px rgba(99, 102, 241, 0.4)'
                }}>
                  <Icon source={StarFilledIcon} tone="base" />
                </div>

                <Text variant="heading2xl" as="h1">
                  Creating your <Text variant="heading2xl" as="span" tone="success">app</Text>
                </Text>

                <Text variant="bodyLg" tone="subdued">
                  Your application would be ready soon.
                </Text>

                <Button 
                  size="large"
                  onClick={onPleaseWait}
                  variant="primary"
                >
                  Please Wait
                </Button>

                <Divider />

                <InlineStack gap="loose" align="center">
                  <InlineStack gap="tight" align="center">
                    <Icon source={ClockIcon} tone="subdued" />
                    <Text variant="bodyMd" tone="subdued">Time elapsed:</Text>
                    <Badge tone="info">{formatted}</Badge>
                  </InlineStack>
                  
                  <InlineStack gap="tight" align="center">
                    <Icon source={PlusIcon} tone="subdued" />
                    <Text variant="bodyMd" tone="subdued">Coins:</Text>
                    <Badge tone="success">{count}</Badge>
                  </InlineStack>
                </InlineStack>

                <InlineStack gap="tight">
                  <Button 
                    variant="secondary" 
                    size="slim" 
                    onClick={() => { 
                      resetTimer(); 
                      resetCount(); 
                      setShowBanner(true);
                    }}
                    icon={RefreshIcon}
                  >
                    Reset
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="slim" 
                    onClick={() => { 
                      inc(); 
                      setShowBanner(true);
                    }}
                    icon={PlusIcon}
                  >
                    Add Coin
                  </Button>
                </InlineStack>
                </BlockStack>
            </div>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Layout.SectionOneHalf>
            <ExampleCard
              title="Shopify Polaris"
              description="This is an example of a Polaris Card component showcasing the design system."
              badgeText="New"
              onAction={() => inc()}
            />
          </Layout.SectionOneHalf>
          <Layout.SectionOneHalf>
            <ExampleCard
              title="React + TypeScript"
              description="Built with modern React patterns and TypeScript for type safety."
              badgeText="Modern"
            />
          </Layout.SectionOneHalf>
        </Layout.Section>

        <Layout.Section>
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <Text variant="bodyMd" tone="subdued">
              Powered by Cloudflare
            </Text>
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  )
}