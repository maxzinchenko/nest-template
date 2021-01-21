import { ApiProperty } from '@nestjs/swagger';

export class StatusDto {
  @ApiProperty()
  readonly online: boolean;
}
