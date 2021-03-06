import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export interface IProductWriteProps {
  isEdit: boolean;
  data: any;
}

export interface FormValues {
  name: string;
  remarks: string;
  price: number;
  contents: string;
  tags?: string[];
  images?: string[];
  fileUrls?: string[];
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  data: any;
  isEdit?: boolean;
  isOpen: boolean;
  setValue: UseFormSetValue<FieldValues>;
  getValue: UseFormGetValues<FieldValues>;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleOk: () => void;
  handleCancel: () => void;
  handleChange: (value: string) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSubmit: (data: FormValues) => Promise<void>;
  onClickUpdate: (data: FormValues) => Promise<void>;
  onCompleteAddressSearch(data: any): void;
  onClickAddressSearch: () => void;
  onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>): void;
  onClickMoveToDetail: () => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  hashArr: string[];
  onKeyUpHashTag: (event: any) => void;
  deleteHashTag: (index: any) => () => void;
}
