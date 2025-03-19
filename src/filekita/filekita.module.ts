import { Module } from '@nestjs/common';
import { FileKitaService } from './filekita.service';
import { FilekitaController } from './filekita.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileKita } from './entities/filekita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FileKita])],
  controllers: [FilekitaController],
  providers: [FileKitaService],
  exports: [FileKitaService],
})
export class FilekitaModule {}
