import { Anchor, HStack, VStack, Text } from "@hope-ui/solid"
import { Link } from "@solidjs/router"
import { AnchorWithBase } from "~/components"
import { useT } from "~/hooks"
import { me } from "~/store"
import { UserMethods } from "~/types"

export const Footer = () => {
  const t = useT()
  return (
    <VStack class="footer" w="$full" py="$4">
      <HStack spacing="$1">
        <Text>
          Powered by{" "}
          <Anchor href="https://github.com/Xhofe/alist" external>
            Alist
          </Anchor>
        </Text>
      </HStack>
    </VStack>
  )
}
