import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../app/create-app-slice"
import { getUserOrganizations } from "../services/user-service"
import { User } from "../types/user.types"
import { Organization } from "@/types/organization.types"
import { createAsyncThunk } from "@reduxjs/toolkit"

export enum LoadingStatus {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

export interface UserSliceState {
  user: User | null
  userOrganizations: Organization[]
  organization: Organization | null
  status: LoadingStatus
}

const initialState: UserSliceState = {
  user: null,
  status: LoadingStatus.IDLE,
  userOrganizations: [],
  organization: null,
}

export const fetchUserOrganizations = createAsyncThunk(
  "user/fetchUserOrganizations",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getUserOrganizations()
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const userSlice = createAppSlice({
  name: "user",
  initialState,
  reducers: create => ({
    setUser: create.reducer((state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    }),
    setOrganization: create.reducer(
      (state, action: PayloadAction<Organization | null>) => {
        state.organization = action.payload
      },
    ),
  }),
  selectors: {
    selectUser: counter => counter.user,
  },
  extraReducers: builder => {
    builder.addCase(fetchUserOrganizations.fulfilled, (state, action) => {
      state.userOrganizations = action.payload
    })
  },
})

export const { setUser, setOrganization } = userSlice.actions

export const { selectUser } = userSlice.selectors
