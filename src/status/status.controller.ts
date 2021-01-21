import { Controller, Get } from '@nestjs/common';

import { StatusDto } from './dto/status.dto';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  index(): StatusDto {
    return this.statusService.index();
  }
}
