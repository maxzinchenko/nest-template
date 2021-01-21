import { Injectable } from '@nestjs/common';

import { StatusDto } from './dto/status.dto';

@Injectable()
export class StatusService {
  index(): StatusDto {
    return { online: true };
  }
}
