import { DatePicker, SequencePrefixIdProvider } from 'smarthr-ui';

export default function Home() {
  return (
    <SequencePrefixIdProvider>
      <DatePicker />
    </SequencePrefixIdProvider>
  )
}
