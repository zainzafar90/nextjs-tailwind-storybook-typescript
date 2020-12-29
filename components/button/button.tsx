import clx from 'classnames'
import React, {
  memo,
  forwardRef,
  useRef,
  MouseEvent,
  useMemo,
  useImperativeHandle,
  PropsWithoutRef,
  RefAttributes,
} from 'react'
import { ButtonTypes, NormalSizes } from '../utils/prop-types'
import { useButtonGroupContext } from '../button-group/button-group-context'
import { filterPropsWithGroup, getButtonChildrenWithIcon } from './utils'

interface Props {
  type?: ButtonTypes
  size?: NormalSizes
  ghost?: boolean
  loading?: boolean
  shadow?: boolean
  auto?: boolean
  effect?: boolean
  disabled?: boolean
  htmlType?: React.ButtonHTMLAttributes<any>['type']
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

const defaultProps = {
  type: 'default' as ButtonTypes,
  size: 'medium' as NormalSizes,
  htmlType: 'button' as React.ButtonHTMLAttributes<any>['type'],
  ghost: false,
  loading: false,
  shadow: false,
  auto: false,
  effect: true,
  disabled: false,
  className: '',
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>
export type ButtonProps = Props & typeof defaultProps & NativeAttrs

const Button = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(({ ...btnProps }, ref: React.Ref<HTMLButtonElement | null>) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  useImperativeHandle(ref, () => buttonRef.current)

  const groupConfig = useButtonGroupContext()
  const filteredProps = filterPropsWithGroup(btnProps, groupConfig)
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    children,
    disabled,
    type,
    loading,
    shadow,
    ghost,
    effect,
    onClick,
    auto,
    size,
    icon,
    htmlType,
    iconRight,
    className,
    ...props
  } = filteredProps
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    onClick && onClick(event)
  }

  const childrenWithIcon = useMemo(
    () =>
      getButtonChildrenWithIcon(auto, size, children, {
        icon,
        iconRight,
      }),
    [auto, size, children, icon, iconRight]
  )

  return (
    <button
      ref={buttonRef}
      type={htmlType}
      className={clx(
        'inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-lg text-white bg-blue-450 hover:bg-blue-550 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm',
        className
      )}
      disabled={disabled}
      onClick={clickHandler}
      {...props}
    >
      {loading && <span>...</span>}
      {childrenWithIcon}
    </button>
  )
})

type ButtonComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>
type ComponentProps = Partial<typeof defaultProps> &
  Omit<Props, keyof typeof defaultProps> &
  NativeAttrs

Button.defaultProps = defaultProps

export default memo(Button) as ButtonComponent<
  HTMLButtonElement,
  ComponentProps
>
