export interface FormValues {
  data: any;
  isEdit: boolean;
  isOpen: boolean;
  name: string;
  remarks: string;
  price: number;
  contents: string;
  tags?: string[];
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  handleOk: () => void;
  handleCancel: () => void;
  handleSubmit: () => void;
  onCompleteAddressSearch: () => void;
  // onClickSubmit: () => void;
  // onClickUpdate: () => void;
  onClickAddressSearch: () => void;
  onChangeAddressDetail: () => void;
}

export interface IProductWriteUIProps {}
