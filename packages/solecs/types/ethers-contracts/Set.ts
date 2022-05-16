/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SetInterface extends utils.Interface {
  contractName: "Set";
  functions: {
    "add(uint256)": FunctionFragment;
    "getItems()": FunctionFragment;
    "has(uint256)": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "size()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "add", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "getItems", values?: undefined): string;
  encodeFunctionData(functionFragment: "has", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "remove", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "size", values?: undefined): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getItems", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "has", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "size", data: BytesLike): Result;

  events: {};
}

export interface Set extends BaseContract {
  contractName: "Set";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    add(item: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    getItems(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    has(item: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    remove(
      item: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    size(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  add(item: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  getItems(overrides?: CallOverrides): Promise<BigNumber[]>;

  has(item: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  remove(item: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  size(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    add(item: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getItems(overrides?: CallOverrides): Promise<BigNumber[]>;

    has(item: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    remove(item: BigNumberish, overrides?: CallOverrides): Promise<void>;

    size(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    add(item: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    getItems(overrides?: CallOverrides): Promise<BigNumber>;

    has(item: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    remove(item: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    size(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add(item: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    getItems(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    has(item: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      item: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    size(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}